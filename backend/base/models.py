from django.db import models

# Create your models here.

class Contribution(models.Model):
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to='raw_pdfs/')
    linkedIn = models.URLField(default='')
    uploaded_at = models.DateTimeField(auto_now_add=True)


    def __str__(self) -> str:
        return self.name


