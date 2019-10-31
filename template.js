module.exports = {
  main: `
    <form action="/store" method='get'>
    <label>이름</label>
    <input type="text" name="name" id="" />
    <input type="submit" value="저장" />
    </form>
    `,
  store: `
  <form action="/">
    DB 저장 완료.
잠시 후, 메인 화면으로 이동합니다.
<input type="submit" value="메인화면으로" />
</form>
    `
};
