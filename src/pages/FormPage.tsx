interface IFormPageProps {
  goToHome: () => void;
}

const FormPage = ({ goToHome }: IFormPageProps) => {
  return (
    <div>
      <h1>FormPage</h1>
      <button onClick={goToHome}>goToHome</button>
    </div>
  );
};
export { FormPage };
