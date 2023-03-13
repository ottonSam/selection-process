interface IProps {
  goToForm: () => void;
}

const LandingPage = ({ goToForm }: IProps) => {
  return (
    <div>
      <h1>LandingPage</h1>

      <button onClick={goToForm}>goToForm</button>
    </div>
  );
};
export { LandingPage };
