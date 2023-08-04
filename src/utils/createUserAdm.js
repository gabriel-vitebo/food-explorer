import axios from "axios";

export const api = axios.create({
  baseURL: "localhost:3333",
});

async function createUserAdm() {
  try {
    const response = await api.post("http://localhost:3333/users", {
      name: "usuário administrativo",
      email: "testAdmin@adm.com",
      password: "123456",
      isAdm: true,
    });

    console.log(
      "Usuário criado com sucesso!",
      "Logue como administrador com o email: 'testAdmin@adm.com' e senha: '123456'"
    );
  } catch (error) {
    console.error("Verifique se a API está rodando na sua maquina", error);
  }
}

createUserAdm();
