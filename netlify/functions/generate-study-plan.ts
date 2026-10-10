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
    const { totalScore, sectionScores, errorBreakdown, weakTopics } = body;

    const planPrompt = `
You are an expert GMAT Focus Edition master tutor who scored 805.
A student just completed a simulation with the following diagnostic results:
- Total Score: ${totalScore} (Target: 705+)
- Quant: ${sectionScores?.QUANT || 75}/90
- Verbal: ${sectionScores?.VERBAL || 75}/90
- Data Insights: ${sectionScores?.DATA_INSIGHTS || 75}/90
- Error Types: ${JSON.stringify(errorBreakdown || {})}
- Weakest Topics: ${JSON.stringify(weakTopics || [])}

Create a highly detailed, tactical 14-day study plan to bring this student past the 705 milestone.
Provide JSON output with a 14-day schedule and top 3 psychometric tips.
`;

    const planSchema = {
      type: Type.OBJECT,
      properties: {
        summaryAnalysis: { type: Type.STRING },
        topPsychometricTips: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
        dailySchedule: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              day: { type: Type.INTEGER },
              theme: { type: Type.STRING },
              goals: { type: Type.ARRAY, items: { type: Type.STRING } },
              drillFocus: { type: Type.STRING },
              targetBenchmark: { type: Type.STRING },
            },
            required: ['day', 'theme', 'goals', 'drillFocus', 'targetBenchmark'],
          },
        },
      },
      required: ['summaryAnalysis', 'topPsychometricTips', 'dailySchedule'],
    };

    const result = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: planPrompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: planSchema,
      },
    });

    const parsed = JSON.parse(result.text || '{}');
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, plan: parsed }),
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message }),
    };
  }
}
