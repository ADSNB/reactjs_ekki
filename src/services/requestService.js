import * as RequestService from "request";

// construct response model like
/*
Response: {
  content: conteúdo da resposta, model / dados (mapear para um objeto no front-end)
  hasError: se ocorreu erro
  errorDescription: a descrição do erro
}
*/
export function Request(options) {
  RequestService(options, (error, response, body) => {
    if (response.statusCode === 200) {
      // return ok from response
    } else {
      // return an erro that must be treated
    }
  });
}
