from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/about')
def about():
    return render_template('about.html', bg_class='about-bg')

@app.route('/work')
def work():
    return render_template('work.html', bg_class='work-bg')

@app.route('/skills')
def skills():
    return render_template('skills.html', bg_class='skills-bg')

@app.route('/art')
def art():
    return render_template('art.html', bg_class='art-bg')

@app.route('/projects')
def projects():
    return render_template('projects.html', bg_class='projects-bg')

@app.route('/contact')
def contact():
    return render_template('contact.html', bg_class='contact-bg')

if __name__ == '__main__':
    app.run(debug=True)
