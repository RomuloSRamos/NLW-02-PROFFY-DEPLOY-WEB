import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../sevices/api';

export interface Teacher{
    id:number;
    name:string;
    avatar:string;
    bio:string;
    subject:string;
    cost:string;
    user_id:string;
    whatsapp:string;
}

export interface teacherItemProps{
    teacher: Teacher
}
const TeacherItem:React.FC<teacherItemProps> = ({teacher}) => {
    function createNewConnection() {
        api.post('connections',{
            user_id: teacher.user_id,
        }
        )
    }
    return(
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>
        <p>{teacher.bio}</p>      
        <footer>
            <p>
                Preço/hora
                <strong>R$ {teacher.cost}</strong>
            </p>
            <a 
            target='_blank'
            onClick={createNewConnection}
            href={`https://wa.me/${teacher.whatsapp}`}>
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </a>

        </footer>      
        </article> 
    )
}
export default TeacherItem;

