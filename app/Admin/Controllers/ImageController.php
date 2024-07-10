<?php

namespace App\Admin\Controllers;

use App\Models\Gallery;
use App\Models\Image;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class ImageController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Image';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Image());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('image_name', __('Image name'));
        $grid->column('description', __('Description'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Image::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('description', __('Description'));
        $show->field('image_name', __('Image name'));
        $show->galleries('Galleries', function($galleries) {
            $galleries->resource('/admin/galleries');

            $galleries->id();
            $galleries->name();
            $galleries->created_at();
            $galleries->updated_at();
        });
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Image());

        $form->text('name', __('Name'));
        $form->text('image_name', __('Image name'));
        $form->textarea('description', __('Description'));
        $form->multipleSelect('galleries', __('Galleries'))->options(Gallery::all()->pluck('name', 'id'));

        return $form;
    }
}
