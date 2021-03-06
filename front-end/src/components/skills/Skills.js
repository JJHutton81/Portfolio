import React, { Component } from 'react';
import { Spring, Trail } from "react-spring/renderprops";
import { NavLink } from 'react-router-dom';

import PieChart from 'react-minimal-pie-chart';

import STMenu from '../menu/starTrek/STMenu';

import './skills.css';

const posts = [
  { title: <div class='SkillCard'>
  <PieChart data={[
    {
      title: 'One',
      value: 90,
      color: '#FF4136'
    },
    ]} 
    totalValue={100}
    lineWidth={20}
    label
    labelStyle={{
    fontSize: '25px',
    fontFamily: 'Stylish, sans-serif'
    }}
    style={{height: '200px'}}
    labelPosition={0}
    startAngle={-25}
    lengthAngle={-360}
    animate
    animationDuration={3000}
    animationEasing={"ease-in-out"}
    rounded={'true'}
  />
    <h2 class='SkillTag'>HTML</h2>
    </div>, id: 1 },
  { title: <div class='SkillCard'>
  <PieChart data={[
    {
      title: 'One',
      value: 90,
      color: '#FF4136'
    },
    ]} 
    totalValue={100}
    lineWidth={20}
    label
    labelStyle={{
    fontSize: '25px',
    fontFamily: 'Stylish, sans-serif'
    }}
    style={{height: '200px'}}
    labelPosition={0}
    startAngle={-25}
    lengthAngle={-360}
    animate
    animationDuration={3000}
    animationEasing={"ease-in-out"}
    rounded={'true'}
  />
    <h2 class='SkillTag'>CSS</h2>
    </div>, id: 2 },
  { title: <div class='SkillCard'>
  <PieChart data={[
    {
      title: 'One',
      value: 70,
      color: '#FF4136'
    },
    ]} 
    totalValue={100}
    lineWidth={20}
    label
    labelStyle={{
    fontSize: '25px',
    fontFamily: 'Stylish, sans-serif'
    }}
    style={{height: '200px'}}
    labelPosition={0}
    startAngle={-25}
    lengthAngle={-360}
    animate
    animationDuration={3000}
    animationEasing={"ease-in-out"}
    rounded={'true'}
  />
    <h2 class='SkillTag'>React</h2>
    </div>, id: 3 },
  { title: <div class='SkillCard'>
  <PieChart data={[
    {
      title: 'One',
      value: 50,
      color: '#FF4136'
    },
    ]} 
    totalValue={100}
    lineWidth={20}
    label
    labelStyle={{
    fontSize: '25px',
    fontFamily: 'Stylish, sans-serif'
    }}
    style={{height: '200px'}}
    labelPosition={0}
    startAngle={-25}
    lengthAngle={-360}
    animate
    animationDuration={3000}
    animationEasing={"ease-in-out"}
    rounded={'true'}
  />
    <h2 class='SkillTag'>JavaScript</h2>
    </div>, id: 4 },
    { title: <div class='SkillCard'>
    <PieChart data={[
      {
        title: 'One',
        value: 50,
        color: '#FF4136'
      },
      ]} 
      totalValue={100}
      lineWidth={20}
      label
      labelStyle={{
      fontSize: '25px',
      fontFamily: 'Stylish, sans-serif'
      }}
      style={{height: '200px'}}
      labelPosition={0}
      startAngle={-25}
      lengthAngle={-360}
      animate
      animationDuration={3000}
      animationEasing={"ease-in-out"}
      rounded={'true'}
    />
      <h2 class='SkillTag'>Node.js</h2>
      </div>, id: 5 },
      { title: <div class='SkillCard'>
      <PieChart data={[
        {
          title: 'One',
          value: 50,
          color: '#FF4136'
        },
        ]} 
        totalValue={100}
        lineWidth={20}
        label
        labelStyle={{
        fontSize: '25px',
        fontFamily: 'Stylish, sans-serif'
        }}
        style={{height: '200px'}}
        labelPosition={0}
        startAngle={-25}
        lengthAngle={-360}
        animate
        animationDuration={3000}
        animationEasing={"ease-in-out"}
        rounded={'true'}
      />
        <h2 class='SkillTag'>SQL</h2>
        </div>, id: 6 },
        { title:  <div class='SkillCard'>
        <PieChart data={[
          {
            title: 'One',
            value: 50,
            color: '#FF4136'
          },
          ]} 
          totalValue={100}
          lineWidth={20}
          label
          labelStyle={{
          fontSize: '25px',
          fontFamily: 'Stylish, sans-serif'
          }}
          style={{height: '200px'}}
          labelPosition={0}
          startAngle={-25}
          lengthAngle={-360}
          animate
          animationDuration={3000}
          animationEasing={"ease-in-out"}
          rounded={'true'}
        />
          <h2 class='SkillTag'>UI Design</h2>
          </div>, id: 7 },
            {title: <div class='SkillCard'>
          <PieChart data={[
            {
              title: 'One',
              value: 90,
              color: '#FF4136'
            },
            ]} 
            totalValue={100}
            lineWidth={20}
            label
            labelStyle={{
            fontSize: '25px',
            fontFamily: 'Stylish, sans-serif'
            }}
            style={{height: '200px'}}
            labelPosition={0}
            startAngle={-25}
            lengthAngle={-360}
            animate
            animationDuration={3000}
            animationEasing={"ease-in-out"}
            rounded={'true'}
          />
            <h2 class='SkillTag'>Photoshop</h2>
            </div>, id: 8 },
    //  {title: <div class='SkillCard'>
    //  <PieChart data={[
    //    {
    //      title: 'One',
    //      value: 60,
    //      color: '#FF4136'
    //    },
    //    ]} 
    //    totalValue={100}
    //    lineWidth={20}
    //    label
    //    labelStyle={{
    //    fontSize: '25px',
    //    fontFamily: 'Stylish, sans-serif'
    //    }}
    //    style={{height: '200px'}}
    //    labelPosition={0}
    //    startAngle={-25}
    //    lengthAngle={-360}
    //    animate
    //    animationDuration={3000}
    //    animationEasing={"ease-in-out"}
    //    rounded={'true'}
    //  />
    //    <h2 class='SkillTag'>Illustrator</h2>
    //  </div>, id: 9 }       
];

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
          <Trail
            items={posts}
            keys={post => post.id}
            from={{ opacity: '0', transform: 'translate3d(100%,0,0)' }}
            to={{ opacity: '1', transform: 'translate3d(0,0,0)' }}
            delay={2000}
          >
          {post => props => (
            <h1 className='SkillTitle' style={props}>
            {post.title}
            </h1>
          )}
          </Trail>
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