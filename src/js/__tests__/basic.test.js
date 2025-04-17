describe("setInterval logic", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul class="ul">
        <li class="li"></li>
        <li class="li"></li>
        <li class="li"></li>
      </ul>
    `;
  });

  test('should add "red" class to a random li element', () => {
    const allLi = document.querySelectorAll(".li");

    const randomIndex = Math.floor(Math.random() * allLi.length);
    allLi[randomIndex].classList.add("red");

    const redElement = document.querySelector(".li.red");
    expect(redElement).not.toBeNull();
  });
});
