## Boilerplate NextJS

##### Configs iniciais

- editorconfig
- Eslint
- Prettier
- Husky
- lintstagedrc

**Comandos format code**

```shell
# Roda o lint procurando erro de padrão de formatação no código
npm run lint

# Verificar formatação corrigindo tudo que estiver dentro da pasta src/
npx prettier src/ --write

# Instala o husky. Verificar se os arquivos estão OK antes de dá um commit
npx husky-init && npm install
```

**Comandos tests Jest**

```shell
# Testando com o jest watch
npm run test:watch

# Commit sem passar os testes
git commit -m "nome commit" --no-verify
```
