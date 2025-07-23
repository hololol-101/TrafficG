import { useState } from 'react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import ButtonWrapper from '../../components/common/ButtonWrapper';
import styles from './Signup.module.css';
import { signUp } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    accountId: '',
    password: '',
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      signUp(form);
      alert('회원가입 성공! 로그인 페이지로 이동합니다.');
      navigate('/'); // 👉 이동
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>SIGN UP</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input name="accountId" placeholder="ID" value={form.accountId} onChange={handleChange} />
        <Input name="password" type="password" placeholder="PW" value={form.password} onChange={handleChange} />
        <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <Input name="phoneNumber" placeholder="PhoneNumber" value={form.phoneNumber} onChange={handleChange} />
        <Input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
        <ButtonWrapper>
          <Button type="submit">SIGN UP</Button>
          <Button type="button" onClick={() => window.history.back()}>BACK</Button>
        </ButtonWrapper>
      </form>
    </div>
  );
};

export default Signup;
