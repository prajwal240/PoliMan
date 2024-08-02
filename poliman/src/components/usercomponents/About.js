import React from 'react'

export default function About() {
  return (
    <div className="accordion container" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div className="accordion-body">
            <strong>Lorem ipsum dolor sit amet consectetur adipisicing.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolore dolorum repellat facilis soluta vitae quisquam eaque? Consequuntur illo nam maxime iure tempora numquam cumque saepe odio est tempore repellendus atque quasi cupiditate veniam quisquam facere veritatis, accusantium iste debitis culpa. Doloremque perspiciatis adipisci voluptatum soluta doloribus architecto quam corrupti?
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
          <div className="accordion-body">
            <strong>Lorem ipsum dolor sit amet consectetur adipisicing.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur, tenetur ducimus voluptas temporibus dignissimos laboriosam magnam eveniet recusandae iusto quis natus itaque doloremque provident vitae voluptate architecto officiis molestias maiores sunt! Impedit suscipit quo cupiditate ducimus error veritatis possimus hic quas quos aperiam, nihil officiis repellat, ad explicabo dolores.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
          <div className="accordion-body">
            <strong>Lorem ipsum dolor sit amet consectetur adipisicing.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae cupiditate, aperiam eum eligendi, obcaecati dolorem in, asperiores et veniam culpa soluta adipisci labore! Odio, labore. Aliquam ad reiciendis illo possimus ea vel dolorum, necessitatibus odio sed consectetur nam aperiam quae quam dolores optio quisquam et rem asperiores ipsum vitae.
          </div>
        </div>
      </div>
    </div>
  )
}
