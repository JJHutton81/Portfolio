import React, { Component } from 'react';
import { Spring } from "react-spring/renderprops";
import { NavLink } from 'react-router-dom';

import STMenu from '../menu/starTrek/STMenu';
import HTMLCard from '../skills/skillCards/HTMLCard';
import CSSCard from '../skills/skillCards/CSSCard';

import './skills.css';

//   { title: <div class='SkillCard'>
//   <PieChart data={[
//     {
//       title: 'One',
//       value: 70,
//       color: '#FF4136'
//     },
//     ]} 
//     totalValue={100}
//     lineWidth={20}
//     label
//     labelStyle={{
//     fontSize: '25px',
//     fontFamily: 'Stylish, sans-serif'
//     }}
//     style={{height: '200px'}}
//     labelPosition={0}
//     startAngle={-25}
//     lengthAngle={-360}
//     animate
//     animationDuration={3000}
//     animationEasing={"ease-in-out"}
//     rounded={'true'}
//   />
//     <h2 class='SkillTag'>React</h2>
//     </div>, id: 3 },
//   { title: <div class='SkillCard'>
//   <PieChart data={[
//     {
//       title: 'One',
//       value: 50,
//       color: '#FF4136'
//     },
//     ]} 
//     totalValue={100}
//     lineWidth={20}
//     label
//     labelStyle={{
//     fontSize: '25px',
//     fontFamily: 'Stylish, sans-serif'
//     }}
//     style={{height: '200px'}}
//     labelPosition={0}
//     startAngle={-25}
//     lengthAngle={-360}
//     animate
//     animationDuration={3000}
//     animationEasing={"ease-in-out"}
//     rounded={'true'}
//   />
//     <h2 class='SkillTag'>JavaScript</h2>
//     </div>, id: 4 },
//     { title: <div class='SkillCard'>
//     <PieChart data={[
//       {
//         title: 'One',
//         value: 50,
//         color: '#FF4136'
//       },
//       ]} 
//       totalValue={100}
//       lineWidth={20}
//       label
//       labelStyle={{
//       fontSize: '25px',
//       fontFamily: 'Stylish, sans-serif'
//       }}
//       style={{height: '200px'}}
//       labelPosition={0}
//       startAngle={-25}
//       lengthAngle={-360}
//       animate
//       animationDuration={3000}
//       animationEasing={"ease-in-out"}
//       rounded={'true'}
//     />
//       <h2 class='SkillTag'>Node.js</h2>
//       </div>, id: 5 },
//       { title: <div class='SkillCard'>
//       <PieChart data={[
//         {
//           title: 'One',
//           value: 50,
//           color: '#FF4136'
//         },
//         ]} 
//         totalValue={100}
//         lineWidth={20}
//         label
//         labelStyle={{
//         fontSize: '25px',
//         fontFamily: 'Stylish, sans-serif'
//         }}
//         style={{height: '200px'}}
//         labelPosition={0}
//         startAngle={-25}
//         lengthAngle={-360}
//         animate
//         animationDuration={3000}
//         animationEasing={"ease-in-out"}
//         rounded={'true'}
//       />
//         <h2 class='SkillTag'>SQL</h2>
//         </div>, id: 6 },
//         { title:  <div class='SkillCard'>
//         <PieChart data={[
//           {
//             title: 'One',
//             value: 50,
//             color: '#FF4136'
//           },
//           ]} 
//           totalValue={100}
//           lineWidth={20}
//           label
//           labelStyle={{
//           fontSize: '25px',
//           fontFamily: 'Stylish, sans-serif'
//           }}
//           style={{height: '200px'}}
//           labelPosition={0}
//           startAngle={-25}
//           lengthAngle={-360}
//           animate
//           animationDuration={3000}
//           animationEasing={"ease-in-out"}
//           rounded={'true'}
//         />
//           <h2 class='SkillTag'>UI Design</h2>
//           </div>, id: 7 },
//             {title: <div class='SkillCard'>
//           <PieChart data={[
//             {
//               title: 'One',
//               value: 90,
//               color: '#FF4136'
//             },
//             ]} 
//             totalValue={100}
//             lineWidth={20}
//             label
//             labelStyle={{
//             fontSize: '25px',
//             fontFamily: 'Stylish, sans-serif'
//             }}
//             style={{height: '200px'}}
//             labelPosition={0}
//             startAngle={-25}
//             lengthAngle={-360}
//             animate
//             animationDuration={3000}
//             animationEasing={"ease-in-out"}
//             rounded={'true'}
//           />
//             <h2 class='SkillTag'>Photoshop</h2>
//             </div>, id: 8 },
//      {title: <div class='SkillCard'>
//      <PieChart data={[
//        {
//          title: 'One',
//          value: 60,
//          color: '#FF4136'
//        },
//        ]} 
//        totalValue={100}
//        lineWidth={20}
//        label
//        labelStyle={{
//        fontSize: '25px',
//        fontFamily: 'Stylish, sans-serif'
//        }}
//        style={{height: '200px'}}
//        labelPosition={0}
//        startAngle={-25}
//        lengthAngle={-360}
//        animate
//        animationDuration={3000}
//        animationEasing={"ease-in-out"}
//        rounded={'true'}
//      />
//        <h2 class='SkillTag'>Illustrator</h2>
//      </div>, id: 9 }       
// ];

export default class Skills extends Component {
    render() {
      return (
        <Spring config={{duration: 2000}} from={{ marginTop: 1000, marginLeft: 1000 }} to={{ marginTop: 0, marginLeft: 0 }}>
          { props => (
        <div className='SkillBody' style={ props }>
          <div>
            <STMenu />
          </div>
          <div class='SkillWrapper'>
            <Spring config={{ duration: 800, delay: 3000 }} 
              from={{
                transform: 'translate3d(800px,500px,0) scale(2) rotateX(180deg)',
                boxShadow: '0px 100px 150px -10px #2D3747' }} 
              to={{
                transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
                boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)', }}>
                { props => (
                <div style={ props }>
                  <HTMLCard />
                </div>
              )
              }
            </Spring>
            <Spring config={{ duration: 1000, delay: 2500 }}
              from={{
                transform: 'translate3d(100px,-600px,0) scale(2) rotateX(360deg)',
                opacity: 0
              }}
              to={{
                transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
                opacity: 1
              }}>
                {props => (
                <div style={props}>
                  <CSSCard />
                </div>
              )
              }
            </Spring>      
          <NavLink to='/contact'
            style={{ 
              display: 'flex',
              textDecoration: 'none',
              alignSelf: 'flex-end',
              marginRight: '2%',
            }}
          > 
          <button className='ProjectButton'>
            <p class='pButt'>Next</p>  
          </button>
          </NavLink>
          </div> 
        </div>
                    )
          }
          </Spring>
      )    
    }
}