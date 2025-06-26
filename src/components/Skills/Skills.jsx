import React from 'react'
import { SkillsInfo } from '../../constants'
import Tilt from 'react-parallax-tilt'

const Skills = () => {
  return (
   <section
   id='skills'
   className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom'
   > 
   {/* section title */}
  <div className='text-center mb-8'>
    <h2 className='text-3xl sm:text-4xl font-bold text-white'>SKILLS</h2>
    <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'>

    </div>
    <p className='text-gray-400 mt-4 text-lg font-semibold '>A collection of my technical skills and experience honed through various projects and experiences</p>
   </div>

   {/* skills Catagories */}
  <div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-between'>
    {SkillsInfo.map((category)=>(

    <div 
    key={category.title}
    className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white
    shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'
    >
     <h3 className='text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center'>
      {category.title}
     </h3>
     {/* Skill Items - 3 per row on larger screens */}
      <Tilt
           
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
     <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
      {category.skills.map((skill) =>(
        <div 
        key={skill.name}
        className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center'
        >
          <img
          src={skill.logo}
          alt={`${skill.name} logo`}
          className='w-6 h-6 sm:w-8 sm:h-8'
          />
          <span className='text-xs sm:text-sm text-gray-300'>
            {skill.name}
          </span>

        </div>
      ))}

     </div>
     </Tilt>

    </div> 
    
    ))}
   </div>
     
     {/* leetcode dashbord */}
    <div className='text-center mb-8'>
      <span className='text-3xl sm:text-4xl font-bold text-white'>
       LEETCODE DASHBORD
      </span>
      <div className='w-85 h-1 flex items-center justify-center bg-[#8245ec] px-6 max-auto mt-2'>

      </div>
    </div>
    <div>
      <img
      src="https://leetcard.jacoblin.cool/mdbasimali?theme=dark&bg=111827&ext=contest,activity&animation=true&font=JetBrains%20Mono&site=us" 
      alt="LeetCode Stats Custom BG"
        
        className="rounded-xl w-[100%] shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
      />
    
  </div>
   
    
   </section>
  )
}

export default Skills
