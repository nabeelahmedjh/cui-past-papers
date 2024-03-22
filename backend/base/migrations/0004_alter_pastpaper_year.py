# Generated by Django 5.0.3 on 2024-03-22 05:00

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_rename_pastpapar_pastpaper'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pastpaper',
            name='year',
            field=models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(2024), django.core.validators.MinValueValidator(2000)]),
        ),
    ]