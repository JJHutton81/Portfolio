import React, { Component } from 'react';

import PieChart from 'react-minimal-pie-chart';

import STMenu from '../menu/starTrek/STMenu';

import './skills.css';

export default class Skills extends Component {
    render() {
      return (
        <div>
          <div>
            <STMenu />
          </div>
          <div class='SkillWrapper'>
          <div class='SkillCard'>
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
            </div>
            <div class='SkillCard'>
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
            </div>
            <div class='SkillCard'>
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
            </div>
            <div class='SkillCard'>
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
            </div>
            <div class='SkillCard'>
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
            </div>
            <div class='SkillCard'>
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
            </div>
            <div class='SkillCard'>
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
            </div>
            <div class='SkillCard'>
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
            </div>
            <div class='SkillCard'>
          <PieChart data={[
            {
              title: 'One',
              value: 60,
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
            <h2 class='SkillTag'>Illustrator</h2>
            </div>
          </div>
          </div>
        )    
    }
}