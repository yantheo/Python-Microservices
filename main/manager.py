from main import app, db
from flask_migrate import Migrate

migrate = Migrate(app, db)

if __name__ == "__main__":
    from flask.cli import main as flask_main

    flask_main()
