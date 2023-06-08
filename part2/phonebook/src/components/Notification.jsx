import '../index.css'

const Notification = ({ cls, message }) => {
    if (message === null) return null
    return (
        <div className={cls}>
            {message}
        </div>
    )
}

export default Notification