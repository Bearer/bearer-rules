SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=5),
    # bearer:expected python_django_jwt_weak_encryption
    "ALGORITHM": None,
    "OTHER": "none"
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=5),
    # bearer:expected python_django_jwt_weak_encryption
    "ALGORITHM": "none",
    "OTHER": "none"
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=5),
    "ALGORITHM": "HS256",
    "OTHER": "none"
}
