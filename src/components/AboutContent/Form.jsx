import React, { useState } from 'react';
import './styles/Form.css';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Form() {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // 将表单数据保存到 Firebase 数据库
      const docRef = await addDoc(collection(db, 'formSubmissions'), {
        mail,
        name,
        phone,
        message,
      });

      console.log('文档已写入，ID：', docRef.id);
      alert('傳送成功！');

      // 提交成功后清空表单字段
      setMail('');
      setName('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error('添加文档时出错：', error);
    }
  };

  return (
    <div className="formFrame">
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="mail" className="formLabel">
            Gmail:
            <input type="text" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} />
          </label>

          <label htmlFor="name" className="formLabel">
            Name:
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>

          <label htmlFor="phone" className="formLabel">
            Phone:
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>

          <label htmlFor="message" className="formLabel">
            Message:
            <textarea id="form-message" name="message" rows="4" cols="40" value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>

          <input type="submit" value="Submit" id="formButton" />
        </div>
      </form>
    </div>
  );
}

export default Form;
