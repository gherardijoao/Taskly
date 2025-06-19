# Taskly - API Backend

## Cadastro de Usuário

### Endpoint

`POST /users`

### Body (JSON)
```
{
  "nome": "João da Silva",
  "email": "joao@email.com",
  "senha": "123456"
}
```

### Exemplo cURL
```
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"nome":"João da Silva", "email":"joao@email.com", "senha":"123456"}'
```

### Resposta de sucesso
```
{
  "id": "uuid-gerado",
  "email": "joao@email.com",
  "nome": "João da Silva",
  "dataCriacao": "2024-05-30T12:34:56.789Z",
  "dataAtualizacao": "2024-05-30T12:34:56.789Z"
}
```

### Resposta de erro (exemplo)
```
{
  "error": "Nome, email e senha são obrigatórios."
}

{
  "error": "E-mail já cadastrado"
}
``` 