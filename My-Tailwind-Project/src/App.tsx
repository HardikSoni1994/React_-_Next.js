import './App.css'

function App() {

  const myStyle = {
    color: "Violet",
    backgroundColor: 'black',
    padding: '25px',
    letterSpacing: '1px',
    margin: '5px 10px'
  }

  return <>
  <div>
     <h1 className="text-center text-3xl bg-amber-400 text-amber-800">My React Tailwind Project</h1>

     <h2 className="text-3xl text-center text-yellow-700 mt-5">Hello, Hardik 👋</h2>
     <h2 className="text-3xl text-center text-blue-500 mt-5">Hello, Hardik 👋</h2>

    {/* inline css */}
     <p style={{fontSize: '18px', fontWeight:'600'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos possimus pariatur, aut aliquam ut quibusdam expedita odio? Blanditiis delectus possimus numquam, ipsa repudiandae quaerat laborum dignissimos assumenda nostrum eaque repellat doloremque libero in nam et voluptate quibusdam aliquid velit sunt obcaecati ad unde perferendis praesentium tenetur? Enim vitae excepturi, doloribus placeat autem nihil in quis cupiditate nobis necessitatibus nemo odit modi. Ab illum porro laboriosam dolorem, laborum quibusdam similique hic voluptatibus dolorum, culpa tenetur soluta incidunt dolores autem molestias iste, fuga veritatis sit! Consectetur eos molestiae illo dicta enim ipsa! Eaque atque delectus illum animi eius beatae debitis vero architecto.</p>

     <p style={ myStyle }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni excepturi placeat necessitatibus delectus, sint voluptatem, ad impedit ducimus optio eveniet amet molestiae possimus assumenda culpa dignissimos eligendi similique dolorem ab. Praesentium dolor facere voluptas! Consectetur, tempora molestias odio maiores, magni excepturi ipsum, perferendis nulla quo corporis a veritatis ipsam aperiam voluptatibus expedita laborum totam ipsa repellendus quasi velit fugit deleniti unde. Ratione, qui mollitia provident voluptatum officia quam? Commodi voluptate, quidem nam amet maiores eius natus quibusdam voluptatem provident quam quia aliquam voluptas reprehenderit delectus error, illo vel recusandae, consectetur aperiam libero repudiandae. Iusto aut blanditiis debitis praesentium quod totam!</p>
  </div>
  <div className="container">
      <div className="title">
        <h1 className="text-5xl text-amber-600">My Tailwind React Project</h1>
      </div>
  </div>
  </>
}

export default App