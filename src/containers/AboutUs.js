import React, {Component} from 'react';
import axios from 'axios';

//  const AboutUs = function(props)
class AboutUs extends Component 

    {
      // const bgImage = document.getElementsByClassName('background');
      
      constructor(props){
        super(props)
        this.state={
          backgroundImage: ''
        }
      }
      
      componentDidMount(){
      axios({
        method: 'get',
        url: 'http://api.unsplash.com/search/photos?query=coder&client_id=8f885b1c073299c10993ac2aaef37f9f24a7c7ef6194119d0db86dfae4707d97'
    })
    .then(response => {
        console.log(response);
        for(let i=0; i<3;i++){
        console.log(response.data.results[i].urls.regular);
        }
        this.setState(
          {backgroundImage: response.data.results[ Math.floor(Math.random() * 9)+1].urls.regular}
        )
    })
    .catch(error => {
        console.log(error);
    })

  }
  render(){
        return (
          
        <div>

          <div>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <h2 className="text-center"> About Us </h2>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
          </div>

          <div className="background bg-dark container" >
           <img src={this.state.backgroundImage} alt='..' />
           
          </div>

        

        <div className="milestones">

 
        <div className="col-lg-6 about_col order-lg-2 order-1">

 
</div>


          <div className="container">

            <div className="row">

              <div className="col">

                <div className="section_title text-center">
                  
                 <div>   
            
                   
       <blockquote><h3>As a team developers we believe developer who is not optimistic shouldnt be a developer. 
         Programing is like any other sport. You might know the rules but you have to play to learn.Cheers!!!</h3></blockquote>


                 </div>

                </div>
                <div className="section_title text-center">
                <h2>Golden Developers</h2>

        <div className="card-deck">
            <div className="card">
              <img src={this.state.backgroundImage} className="card-img-top" alt="..." height="210px"/>
              <div className="card-body">
                <h5 className="card-title">Abdullah Binmahfouz</h5>
              </div>
            </div>

            <div className="card">
              <img src={this.state.backgroundImage} className="card-img-top" alt="..." height="210px" />
              <div className="card-body">
                <h5 className="card-title">Hanin Nouh</h5>
              </div>
            </div>
            <div className="card">
              <img src={this.state.backgroundImage} className="card-img-top" alt="..." height="210px"/>
              <div className="card-body">
                <h5 className="card-title">Mohammed Alamry</h5>
              </div>
            </div>
            <div className="card">
              <img src={this.state.backgroundImage} className="card-img-top" alt="..." height="210px"/>
              <div className="card-body">
                <h5 className="card-title">Khadijah Saber</h5>
              </div>
           </div>
           <div>
             <br></br>
           </div>
        </div>

        <div>
             <br></br>
           </div>


             </div>

              </div>

            </div>



</div>
 </div>


{/* Newsletter */}
        <div className="newsletter">
          {/* Image by https://unsplash.com/@garciasaldana_ */}
          <div className="newsletter_background" style={{backgroundImage: 'url(images/newsletter.jpg)'}} />
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="newsletter_content">
                  <div className="newsletter_title text-center">Subscribe to our Newsletter</div>
                  <div className="newsletter_form_container">
                    <form action="#" id="newsletter_form" className="newsletter_form">
                      <div className="d-flex flex-md-row flex-column align-content-center justify-content-between">
                        <input type="email" id="newsletter_input" className="newsletter_input" placeholder="Your E-mail Address" />
                        <button type="submit" id="newsletter_button" className="newsletter_button">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


              </div>

  )

}}


export default AboutUs;

























//  const AboutUs = function(props)
//     {
//         return (
            
//             <div>
        
        
//           <div className="container">
//             <div className="row">
//               <div className="col">
                
//               </div>
          
         
//               <div  >
//                 <div className="about_content">
//                   <p></p>
                   
//                 </div>
           
//               <div className="col-lg-6 about_col order-lg-2 order-1">
                 
//               </div>
//             </div>
//   {/* Milestones */}
//   <div className="milestones">
//           <div className="milestones_background parallax-window" data-parallax="scroll" data-image-src="images/fact_background.jpg" data-speed="0.8" />
//           <div className="container">
//             <div className="row">
//               <div className="col">
//                 <div className="section_title ">
//                   <h2>Golden Developers</h2>
//                   <div>1- Abdullah Binmahfouz</div>
//                   <div>2- Hanin</div>
//                   <div>3- Mohammed alamry</div>
//                   <div>4- Khadijah</div>
//                 </div>
                
//             </div>
//             <div className="row">
//               <div className="col-lg-8  ">
//                 <div className="milestones_text">
//                 <div>
//                 <p>"text-center"</p>
                  
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis. Quisque vel est id justo faucibus dapibus id a nibh</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//               </div>
//             <div className="row milestones_container">
//               {/* Milestone */}
//               <div className="col-lg-3 milestone_col">
//                 <div className="milestone text-center">
//                   <div className="milestone_icon"><img src="images/milestone_1.svg" alt="" /></div>
//                   <div className="milestone_counter" data-end-value={17}>0</div>
//                   <div className="milestone_text">Mountains Climbed</div>
//                 </div>
//               </div>
//               {/* Milestone */}
//               <div className="col-lg-3 milestone_col">
//                 <div className="milestone text-center">
//                   <div className="milestone_icon"><img src="images/milestone_2.svg" alt="" /></div>
//                   <div className="milestone_counter" data-end-value={213}>0</div>
//                   <div className="milestone_text">Islands Visited</div>
//                 </div>
//               </div>
//               {/* Milestone */}
//               <div className="col-lg-3 milestone_col">
//                 <div className="milestone text-center">
//                   <div className="milestone_icon"><img src="images/milestone_3.svg" alt="" /></div>
//                   <div className="milestone_counter" data-end-value={11923}>0</div>
//                   <div className="milestone_text">Photos Taken</div>
//                 </div>
//               </div>
//               {/* Milestone */}
//               <div className="col-lg-3 milestone_col">
//                 <div className="milestone text-center">
//                   <div className="milestone_icon"><img src="images/milestone_4.svg" alt="" /></div>
//                   <div className="milestone_counter" data-end-value={15}>0</div>
//                   <div className="milestone_text">Cruises Organized</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>


//           </div>
//         </div>
//     {/* kkkk */}
//         {/* Services */}
//         <div className="services">
//           <div className="container">
//             <div className="row">
//               <div className="col">
//                 <div className="section_title text-center">
//                   <h2>Popular services that we offer</h2>
//                   <div>take a look at these offers</div>
//                 </div>
//               </div>
//             </div>
//             <div className="row icon_box_container">
//               {/* Icon Box */}
           
//               {/* Icon Box */}
             
//               {/* Icon Box */}
             
//             </div>
//           </div>
//         </div>
//         {/* Newsletter */}
        
           
         
//       </div>
//         )
//     }

// export default AboutUs;