export type ProcessedTextResponse = {
  content: string
}

export type ProcessedOptionResponse = {
  options: {
    label: string
    value: string
    id?: number
  }[]
}

export type ProcessedApiResponse =
  | ProcessedTextResponse
  | ProcessedOptionResponse

type ApiTextResponse = {
  response_type: 'text'
  text: string
}

type ApiOptionResponse = {
  response_type: 'option'
  title: string
  options: {
    label: string
    value: {
      input: {
        text: string
      }
    }
  }[]
}

export type ApiResponse = ApiTextResponse | ApiOptionResponse
