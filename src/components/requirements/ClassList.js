import ClassInfo from './ClassInfo'


const ClassList = ({ requiredClasses }) => {

    const renderClassInfo = () => {
        return requiredClasses.map((info) => {
                return <ClassInfo  info={info} key={info.classid} />
        })
    }

    return (
        <div className="class-list " >
            {renderClassInfo()}
        </div>
    )
}

export default ClassList
