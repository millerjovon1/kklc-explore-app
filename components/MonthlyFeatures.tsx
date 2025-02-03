import FeatureGrid from './FeatureGrid'; // Import the FeatureGrid component

const MonthlyFeatures = () => {
  return (
    <section className="section animate mb-6">
      <div className="section-title">
        <h2 className="text-2xl font-semibold">Kugenuma Kaigan Monthly Features</h2>
      </div>
      <FeatureGrid />  {/* Dynamically rendered FeatureGrid */}
    </section>
  );
};

export default MonthlyFeatures;
