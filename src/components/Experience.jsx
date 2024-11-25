import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"

import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionsWrapper } from "../hoc"
import { textVariant } from "../utils/motion"


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[70%] h-[70%] object-contain'
        />
      </div>
    }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
      {experience.project && (
        <div className="mt-5">
          <h4 className="text-white text-[18px] font-semibold">Project: {experience.project.name}</h4>
          <p className="text-white-100 text-[14px]">{experience.project.description}</p>
          <ul className="mt-3 list-disc ml-5 space-y-1">
            {experience.project.key_features.map((feature, index) => (
              <li key={`project-feature-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                {feature}
              </li>
            ))}
          </ul>
          <p className="text-white-100 text-[14px] mt-3 font-semibold">Technologies Used:</p>
          <ul className="list-disc ml-5 space-y-1">
            {experience.project.technologies.map((tech, index) => (
              <li key={`project-tech-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex ">
        <VerticalTimeline>
        {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionsWrapper(Experience,"work")