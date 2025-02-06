

const SocialList = ({data}) => {
    return (
        <ul className="contacts__social">
            {data.map((item, key) => (
                <li key={key} className='contacts__social-item'>
                    <a target='__blank' href={item.href}>{item.icon}</a>
                </li>
            ))}
        </ul>
    )
}

export default SocialList;