export default class ArrayBufferConverter {
  load(bufferData) {
    const buffer = new ArrayBuffer(bufferData.length * 2);
    this.bufferView = new Uint16Array(buffer);
    for (let i = 0; i < bufferData.length; i += 1) {
      this.bufferView[i] = bufferData.charCodeAt(i);
    }
  }

  toString() {
    let textFromBuffer = '';
    for (let i = 0; i < this.bufferView.length; i += 1) {
      textFromBuffer += String.fromCharCode(this.bufferView[i]);
    }
    return textFromBuffer;
  }
}
