import styled from "styled-components";

export const Container = styled.div`
         font-family: "Source Sans Pro", sans-serif;
         font-size: 16px;

         .form-container {
           background: #ddeefc;
           background: #fff;

           box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
           border-radius: 10px;
           padding: 35px;
           max-width: 570px;
           margin: auto;
           width: 100%;
         }
         .pin-wrapper {
           display: flex;
           flex-flow: wrap;
           .form-input {
             width: 268px;
           }
         }
         button[disabled] {
           background: #dddddd;
           cursor: default;
         }
         .mr {
           margin-right: 20px;
         }
         .form-input {
           display: flex;
           flex-direction: column;
           margin-bottom: 20px;
           label {
             font-size: 14px;
             margin-bottom: 5px;
             font-weight: 500;
             color: #1a3b5d;
             width: 100%;
           }
           input {
             height: 30px;
             border-radius: 5px;
             box-shadow: none;
             border: 1px solid #ced6e0;
             transition: all 0.3s ease-in-out;
             padding: 5px 15px;
             background: none;
             color: #1a3b5d;
           }

           p {
             color: red;
           }
         }
         button {
           width: 100%;
           height: 45px;
           background: #2364d2;
           border: none;
           border-radius: 5px;
           font-weight: 500;
           box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
           color: #fff;
           margin-top: 20px;
           cursor: pointer;
         }
         .topic {
           display: flex;
           align-items: center;
           justify-content: center;
         }
       `;
