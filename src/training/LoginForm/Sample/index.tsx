// eslint-disable-file

import React, { FC, useState } from 'react';
import { Loader, SemanticSIZES } from 'semantic-ui-react';

const Sample: FC = () => {
  const [] = useState(true);
  return (
    <div style={{
      width: '400px',
      margin: '30px auto',
      padding: '20px',
      borderRadius: '0.50em',
      border: '1px solid',
      color: '#87CEFA'
    }}>
      <h2 style={{
        margin: '15px auto',
        width: '50%',
        fontFamily: 'Arial Black',
        color: '#87CEFA'
      }}>
        Login
      </h2>
      <hr style={{
        height: '1.5px',
        backgroundColor: '#87CEFA'
      }}/>
        
      <div>
        <div style={{
          margin: '20px auto',
          width: '50%'
        }}>
          <label style={{
            fontFamily: 'Century',
            color: '#87CEFA'
          }}>Email</label>
          <div>
            <input
              type="email"
              placeholder='メールアドレス'
              style={{
                borderColor: '#BBBBBB'
            }}
            />
            </div>
        </div>

        <div style={{
          margin: '20px auto',
          width: '50%'
        }}>
          <label style={{
            fontFamily: 'Century',
            color: '#87CEFA'
          }}>Password</label>
          <div>
            <input
              type="password"
              placeholder = 'パスワード'
              style={{
                borderColor: '#BBBBBB'
              }}
            />
            </div>
        </div>

        <div style={{
              fontFamily: 'Century',
              color: '#87CEFA'
        }}>
          <input
            type="checkbox"
          />
          パスワードを保存
        </div>

        <div style={{
          margin: 'auto',
          width: '0%'
        }}>
          <button
            type="button"
            style={{
              padding: '5px 15px 5px',
              borderRadius: '0.50em',
              color: 'white',
              borderColor: 'white',
              background: '#87CEFA'
            }}
          >
            Login</button>
          </div>
      </div>
    </div>
  );
};


export default Sample;