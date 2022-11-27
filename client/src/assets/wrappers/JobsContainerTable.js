import styled from 'styled-components'

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }

  th,td {
    border: solid 1px;              /* 枠線指定 */
    padding: 10px;      /* 余白指定 */
    text-align:  center;
  }

  table {
    border-collapse:  collapse;     /* セルの線を重ねる */
    // width: 900px;
    background-color:#fff
  }

  .th-label {
    font-size: var(--smallText);
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }

  th {
    // width:  300px;              /* 幅指定 */
    height: 80px;               /* 高さ指定 */
  }

  td {
    font-size: var(--smallText);
    border: solid 1px;              /* 枠線指定 */
    padding: 10px;      /* 余白指定 */
  }

  .show-btn,
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
    display: inline;
  }
  .show-btn {
    color: var(--white);
    background: var(--primary-500);
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }

  .icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--grey-400);
    }
  }
  .text {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
`
export default Wrapper
