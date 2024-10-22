import type {
  ApiResponse,
  ProcessedApiResponse,
  ProcessedOptionResponse,
  ProcessedTextResponse,
} from '../types'

export function processApiResponse(
  response: ApiResponse[]
): ProcessedApiResponse[] {
  const responses = response
    .map(res => {
      if (res.response_type === 'text') {
        const newText = res.text.replaceAll('\n', '<br>')

        return {
          content: newText,
        } as ProcessedTextResponse
      }

      if (res.response_type === 'option') {
        return {
          options: res.options.map(opt => ({
            label: opt.label,
            value: opt.value.input.text,
          })),
        } as ProcessedOptionResponse
      }

      return undefined
    })
    .filter(
      (response): response is ProcessedApiResponse => response !== undefined
    )

  return responses
}
