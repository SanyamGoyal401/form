import './Skill.css'


let Skill = (props) =>{

    return (
        <div className='skill'>
            {props.text + 'x'}
        </div>
    )
}

export default Skill;