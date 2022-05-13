

function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      display: "block",
      shapeRendering: "auto",
    }}
    width={200}
    height={200}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle cx={50} cy={23} r={13} fill="#fff">
      <animate
        attributeName="cy"
        dur="1s"
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"
        keyTimes="0;0.5;1"
        values="23;77;23"
      />
    </circle>
  </svg>
    </div>
  )
}

export default Spinner
