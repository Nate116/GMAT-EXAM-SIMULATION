import { GoogleGenAI, Type } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY || '';

export async function handler(event: any) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  if (!apiKey) {
    return {
      statusCode: 503,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'GEMINI_API_KEY is not configured on Netlify. Please set it in Site configuration -> Environment variables.',
      }),
    };
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: { 'User-Agent': 'aistudio-build' },
      },
    });

    const body = JSON.parse(event.body || '{}');
    const { rawText, testTitle = 'Imported Practice Test', testNumber = 1 } = body;

    const extractPrompt = `
You are a GMAT data extraction specialist.
Extract test questions and student responses from the provided practice test text into structured JSON.
For each question:
- identify section (QUANT, VERBAL, DATA_INSIGHTS)
- position number (1-23)
- question type and topic
- question stem with LaTeX in dollar signs ($...$)
- options array (5 options)
- official_answer (letter A-E)
- my_answer (letter A-E)
- correct (boolean)
- time_spent_sec (integer or 120 default)
- trap_type (e.g. "extreme_language", "c2_trap_ds", "opposite_direction", "sign_error")
- error_classification (one of: "CONCEPT_GAP", "CARELESS_ERROR", "MISREAD_STEM", "TIME_PRESSURE", "FELL_FOR_TRAP")

Source Text:
${(rawText || '').slice(0, 8000)}
`;

    const extractSchema = {
      type: Type.OBJECT,
      properties: {
        totalScore: { type: Type.INTEGER },
        quantScore: { type: Type.INTEGER },
        verbalScore: { type: Type.INTEGER },
        dataInsightsScore: { type: Type.INTEGER },
        questions: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              position: { type: Type.INTEGER },
              section: { type: Type.STRING },
              type: { type: Type.STRING },
              topic: { type: Type.STRING },
              stem: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              official_answer: { type: Type.STRING },
              my_answer: { type: Type.STRING },
              correct: { type: Type.BOOLEAN },
              time_spent_sec: { type: Type.INTEGER },
              trap_type: { type: Type.STRING },
              error_classification: { type: Type.STRING },
            },
            required: ['position', 'section', 'stem', 'options', 'official_answer', 'my_answer', 'correct'],
          },
        },
      },
      required: ['questions'],
    };

    const extractResponse = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: extractPrompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: extractSchema,
      },
    });

    const parsed = JSON.parse(extractResponse.text || '{}');
    const questionsWithIds = (parsed.questions || []).map((q: any, i: number) => ({
      ...q,
      id: `pt_${Date.now()}_q${i + 1}`,
      isReviewed: false,
    }));

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        data: {
          testTitle,
          testNumber,
          totalScore: parsed.totalScore || 675,
          quantScore: parsed.quantScore || 82,
          verbalScore: parsed.verbalScore || 81,
          dataInsightsScore: parsed.dataInsightsScore || 80,
          questions: questionsWithIds,
        },
      }),
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message }),
    };
  }
}
