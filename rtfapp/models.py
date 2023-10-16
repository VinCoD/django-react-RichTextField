from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.


class YourModel(models.Model):
    rich_text_field = RichTextField()
