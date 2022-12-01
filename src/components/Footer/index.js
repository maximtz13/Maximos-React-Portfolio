import React from 'react';

function Footer () {
    return (
        <footer>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
            <ul className='flex-row'>
                <li>
                    <a href='https://github.com/maximtz13'><i class="fa fa-github fa-4x"></i></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/maximo-martinez-jr/'><i class="fa fa-linkedin-square fa-4x"></i></a>
                </li>
                <li>
                    <a href='https://stackoverflow.com/users/19412377/maximtz13'><i class="fa fa-stack-overflow fa-4x"></i></a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;