import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BiLinkExternal} from 'react-icons/bi'
import './index.css'

const Similar = props => {
  const {hook} = props
  const {id, title, location, rating} = hook
  return (
    <li id={id} className="similar-item">
      <img
        className="similar-icon"
        alt="similar job company logo"
        src={hook.imageUrl}
      />
      <h1>{title}</h1>
      <AiFillStar />
      <p>{rating}</p>
      <h2>Description</h2>
      <p>{hook.jobDiscription}</p>
      <div>
        <MdLocationOn />
        <p>{location}</p>
      </div>
      <div>
        <BiLinkExternal />
        <p>{hook.jobType}</p>
      </div>
    </li>
  )
}

export default Similar
