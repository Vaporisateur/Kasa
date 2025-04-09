import './NotFound.scss';

export default function NotFound() {
    return (
      <main className="notfound container">
        <h1 className="notfound__title">404</h1>
        <span className="notfound__subtitle">Oups! La page que vous demandez n'existe pas.</span>
        <a href="/" className="notfound__link">Retourner sur la page d'accueil</a>
      </main>
    );
  }
  