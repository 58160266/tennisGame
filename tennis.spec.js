function TennisGame() {
    const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
    this.playerAScore = 0
    this.playerBScore = 0

    this.reset = () => {
        this.playerAScore = 0
        this.playerBScore = 0
    }

    this.echo = () => {
       return `${scoreString[this.playerAScore]} - ${scoreString[this.playerBScore]}`
    }

    this.playerAGteScore = () => {
        this.playerAScore++
    }
    this.playerBGteScore = () => {
        this.playerBScore++
    }
    // this.playerAGet2ScoreAndplayerAGet1Score = () => {
    //     this.playerAScore = 2
    //     this.playerBScore = 1
    // }
}

test('Echo "Love - Love" when game start', () => {
    // Arrange
    let app = new TennisGame()

    // Act
    app.reset()
    let result = app.echo()

    // Assert
    expect(result).toBe('Love - Love')
})

test('Echo "Fifteen - Love" when playerA get first score', () => {
    // Arrange
    let app = new TennisGame()
    app.reset()
    app.playerAGteScore()

    // Act
    let result = app.echo()

    // Assert
    expect(result).toBe('Fifteen - Love')
})
test('Echo "Love - Fifteen" when playerB get first score', () => {
    // Arrange
    let app = new TennisGame()
    app.reset()
    app.playerBGteScore()

    // Act
    let result = app.echo()

    // Assert
    expect(result).toBe('Love - Fifteen')
})

test('Echo "Thirty - Fifteen" when score is 30 - 15', () => {
  let app = new TennisGame()
  app.reset()
  // app.playerAGet2ScoreAndplayerAGet1Score()
  app.playerAGteScore()
  app.playerAGteScore()
  app.playerBGteScore()

  let result = app.echo()

  // Assert
  expect(result).toBe('Thirty - Fifteen')



})
