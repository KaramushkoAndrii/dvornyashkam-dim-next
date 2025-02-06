
import { ContactsLinks, ContactsSocial } from '../../data/contactsList';

import SocialList from './SocialList';

import './contacts.scss';


const Contacts = () => {
    return (
        <div  className='contacts'>
            <ul className='contacts__links'>
                <li className='contacts__links-item'>
                    <a target='__blank' href={`mailto:${ContactsLinks[0]}`}>{ContactsLinks[0]}</a>
                </li>
                <li className='contacts__links-item'>
                    <a target='__blank' href={`tel:${ContactsLinks[1]}`}>{ContactsLinks[1]}</a>
                </li>
            </ul>

            <SocialList data={ContactsSocial} />
        </div>
    )
}

export default Contacts;