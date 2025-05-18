import { useState } from 'react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import ButtonWrapper from '../../components/common/ButtonWrapper';
import styles from './Signup.module.css';

const Signup = () => {
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
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('회원가입 실패');
      alert('회원가입 성공!');
    } catch (err) {
      console.error(err);
      alert('회원가입 중 오류가 발생했습니다.');
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
