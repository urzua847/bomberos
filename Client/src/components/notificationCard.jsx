import PropTypes from 'prop-types';
import {UseNotification} from '../context/NotificationContext'
import {Link} from 'react-router-dom'

function NotificationCard({ notification }) {

    const {deleteNotification} = UseNotification();

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <header className='flex justify-between'>
            <h1 className='text-2xl font-bold'>{notification.tipe}</h1>
                <div className='flex gap-x-2 items-center'>
                    <button onClick={()=>{
                        deleteNotification(notification._id);
                    }}>delete</button>
                    <Link to={`/notifications/${notification._id}`}>edit</Link>
                </div>  
        </header>
        <p className='text-slate-300'>{notification.date}</p>
        <p className='text-slate-300'>{notification.ubication}</p>
    </div>
  );
}

NotificationCard.propTypes = {
    notification: PropTypes.shape({
      tipe: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      ubication: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
};

export default NotificationCard