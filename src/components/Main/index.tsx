import * as S from './styles'

const Main = ({ title = 'React Avançado', description = 'Reativo' }) => (
  <S.Wrapper>
    <S.Logo src="/img/logoRc.svg" alt="Imagem logo Next" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/logo.svg" alt="Um desenvolvedor"></S.Illustration>
  </S.Wrapper>
)

export default Main
