import * as readline from 'readline';

type LetterGrade = 'A' | 'B' | 'C' | 'D' | 'F' | 'Ошибка';

function convertGrade(grade: number): LetterGrade {
  if (!Number.isInteger(grade)) {
    return 'Ошибка';
  }

  switch (grade) {
    case 5:
      return 'A';
    case 4:
      return 'B';
    case 3:
      return 'C';
    case 2:
      return 'D';
    case 1:
      return 'F';
    default:
      return 'Ошибка';
  }
}

function getStatus(letter: LetterGrade): string {
  return (letter === 'A' || letter === 'B' || letter === 'C')
    ? 'Зачтено'
    : 'Не зачтено / Пересдача';
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите числовую оценку (от 1 до 5): ', (answer: string) => {
  const grade = Number(answer.trim());

  if (isNaN(grade)) {
    console.log('Ошибка: необходимо ввести число!');
  } else {
    const letter = convertGrade(grade);
    
    if (letter === 'Ошибка') {
      console.log(`[Ошибка]: Оценка должна быть целым числом от 1 до 5! Вы ввели: ${grade}`);
    } else {
      console.log(`\nРезультат:`);
      console.log(`Буквенная оценка: [${letter}]`);
      console.log(`Статус: ${getStatus(letter)}`);
    }
  }

  rl.close();
});