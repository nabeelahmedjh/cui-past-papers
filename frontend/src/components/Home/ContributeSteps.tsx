import "./Timeline.css";

export default function ContributeSteps() {
  return (
    <>
      <h1 className="max-w-5xl mx-auto text-4xl text-center mt-32 mb-16">
        Contribute in 3 steps
      </h1>
      <div className="flex justify-center">
        <div className="vtl">
          <div className="circle">
            <p className="txt">Click add submission </p>
          </div>
          <div className="circle">
            <p className="txt">Fill the form</p>
          </div>
          <div className="circle">
            <p className="txt">Submit</p>
          </div>
        </div>
      </div>
    </>
  );
}
