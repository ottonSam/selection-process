interface ILandingPageProps {
  goToForm: () => void;
}

const LandingPage = ({ goToForm }: ILandingPageProps) => {
  return (
    <div>
      <h1>LandingPage</h1>

      <button onClick={goToForm}>goToForm</button>
    </div>
  );
};
export { LandingPage };
