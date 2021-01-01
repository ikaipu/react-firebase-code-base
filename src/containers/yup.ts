import { setLocale } from 'yup';

setLocale({
  mixed: {
    required: '入力は必須です',
    oneOf: '入力したパスワードが異なります',
    notType: '正しい値を入力して下さい',
  },
  string: {
    email: '正しいメールアドレスを入力してください',
  },
  number: {
    integer: '整数値を入力して下さい',
    min: ({ min }) => `${min}以上の値を入力してください`,
    max: ({ max }) => `${max}以下の値を入力してください`,
  },
});
