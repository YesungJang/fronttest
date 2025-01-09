type stepAnswer = {
  step1: string;
  step2: string;
  step3: { freeword: string; keyword: string[] };
};

const createDefaultStepAnswer = (): stepAnswer => ({
  step1: '',
  step2: '',
  step3: { freeword: '', keyword: [] },
});

export function setGeneratorResumeSessionStorageItem(
  stepAnswer: stepAnswer
): void {
  setSessionStorageItem('stepAnswer', stepAnswer);
}

export function getGeneratorResumeSessionStorageItem(): stepAnswer {
  const storedValue = getSessionStorageItem<stepAnswer>('stepAnswer');
  return storedValue ?? createDefaultStepAnswer();
}

// sessionStorageにデータを保存する関数
function setSessionStorageItem(key: string, value: any): void {
  const stringValue = JSON.stringify(value);
  sessionStorage.setItem(key, stringValue);
}

// sessionStorageからデータを取得する関数
function getSessionStorageItem<T>(key: string): T | null {
  const storedValue = sessionStorage.getItem(key);
  if (storedValue) {
    try {
      return JSON.parse(storedValue) as T;
    } catch (error) {
      console.error('Error parsing sessionStorage item:', error);
      return null;
    }
  }
  return null;
}
